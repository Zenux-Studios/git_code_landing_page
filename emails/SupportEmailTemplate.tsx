import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <b>
      Hi From Gitcode, you got an message from {name},{email}
    </b>
    <br />
    <p>{message}</p>
  </div>
);
