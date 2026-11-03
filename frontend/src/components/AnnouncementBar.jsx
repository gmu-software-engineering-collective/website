import { useState } from "react";
import { DISCORD_INVITE_URL } from "../pages/home/content";

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="announce">
      <p className="container announce__text">
        Semester 1: we're building the club website in public.{" "}
        <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">Join us on Discord →</a>
      </p>
      <button className="announce__close" type="button" aria-label="Dismiss announcement" onClick={() => setVisible(false)}>
        ×
      </button>
    </div>
  );
}

export default AnnouncementBar;
