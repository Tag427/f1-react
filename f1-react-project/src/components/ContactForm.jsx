import { useState } from "react";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));

    setFormStatus({ message: "Please wait...", type: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setFormStatus({ message: "Email sent!", type: "success" });
        form.reset();
      } else {
        setFormStatus({
          message: data.message || "Something went wrong.",
          type: "error",
        });
      }
    } catch (err) {
      console.log(err);
      setFormStatus({
        message: "Network error. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => {
      setFormStatus({ message: "", type: "" });
    }, 3000);
  };

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="29c6cd41-4b43-4598-8570-934e76f84fab"
      />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
      />
      <label>
        Name
        <input type="text" name="name" placeholder="Please enter" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="Please enter" required />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Please enter"
          required
        ></textarea>
      </label>

      <button type="submit">Submit</button>
      {formStatus.message && (
        <div
          id="contact-result"
          className={formStatus.type}
          aria-live="polite"
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;