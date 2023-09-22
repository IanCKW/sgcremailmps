import React, { useEffect, useRef } from "react";

interface EmailDraftProps {
  message: string;
  recipients: string;
  subject: string;
  onMessageChange: (newMessage: string) => void;
}

const EmailDraft: React.FC<EmailDraftProps> = ({
  message,
  recipients,
  subject,
  onMessageChange,
}) => {
  const emailDraftRef = useRef(null);
  useEffect(() => {
    if (emailDraftRef.current) {
      (emailDraftRef.current as any).scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleCopyToClipboard = (elementId: string) => {
    const textArea = document.getElementById(elementId) as HTMLTextAreaElement;
    if (textArea) {
      textArea.select();
      document.execCommand("copy");
    }
  };

  // Usage:
  handleCopyToClipboard("email-draft-textarea");

  return (
    <div className="email-draft" ref={emailDraftRef}>
      <h3>Email Draft</h3>
      <p>Your MPs' emails:</p>
      <textarea
        id="recipients-textarea"
        value={recipients}
        onChange={(e) => onMessageChange(e.target.value)}
      />
      <button onClick={() => handleCopyToClipboard("recipients-textarea")}>
        Copy
      </button>
      <p>Subject:</p>
      <textarea
        id="subject-textarea"
        value={subject}
        onChange={(e) => onMessageChange(e.target.value)}
      />
      <button onClick={() => handleCopyToClipboard("subject-textarea")}>
        Copy
      </button>
      <p>Email body:</p>
      <textarea
        id="email-draft-textarea"
        className="email-draft"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
      />
      <button onClick={() => handleCopyToClipboard("email-draft-textarea")}>
        Copy
      </button>
    </div>
  );
};

export default EmailDraft;
