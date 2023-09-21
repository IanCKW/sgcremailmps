import React, { useEffect, useRef } from "react";

interface EmailDraftProps {
  message: string;
  onMessageChange: (newMessage: string) => void;
}

const EmailDraft: React.FC<EmailDraftProps> = ({
  message,
  onMessageChange,
}) => {
  const emailDraftRef = useRef(null);
  useEffect(() => {
    if (emailDraftRef.current) {
      (emailDraftRef.current as any).scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleCopyToClipboard = () => {
    const textArea = document.getElementById(
      "email-draft-textarea"
    ) as HTMLTextAreaElement;
    textArea.select();
    document.execCommand("copy");
  };

  return (
    <div className="email-draft" ref={emailDraftRef}>
      <h3>Email Draft</h3>
      <p>
        If your email app did not open up, you may copy and paste the text below
        into your email app:
      </p>
      <button onClick={handleCopyToClipboard}>Copy</button>
      <textarea
        id="email-draft-textarea"
        className="email-draft"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
      />
    </div>
  );
};

export default EmailDraft;
