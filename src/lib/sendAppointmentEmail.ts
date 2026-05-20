const APPOINTMENT_EMAIL_ENDPOINT = "https://formsubmit.co/ajax/edaiskgz045@gmail.com";
const APPOINTMENT_FORM_ENDPOINT = "https://formsubmit.co/edaiskgz045@gmail.com";

type EmailFields = Record<string, string>;

export async function sendAppointmentEmail(subject: string, fields: EmailFields) {
  const payload = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    ...fields,
  };

  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => formData.append(key, value));

  try {
    const response = await fetch(APPOINTMENT_EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      return;
    }
  } catch {
    // Fall back to a hidden form submit below. This keeps the visitor on the page.
  }

  submitWithHiddenIframe(payload);
  await new Promise((resolve) => window.setTimeout(resolve, 700));
}

function submitWithHiddenIframe(fields: EmailFields) {
  const frameName = "appointment-email-submit-frame";
  let iframe = document.querySelector<HTMLIFrameElement>(`iframe[name="${frameName}"]`);

  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.name = frameName;
    iframe.title = "Randevu e-posta gönderimi";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }

  const form = document.createElement("form");
  form.method = "POST";
  form.action = APPOINTMENT_FORM_ENDPOINT;
  form.target = frameName;
  form.style.display = "none";

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  form.remove();
}
