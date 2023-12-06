import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimePost = ({ timestamp }) => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `, ${timePeriod} ago.`;
  }

  return (
    <span style={{ fontSize: 12 }}>
      {timeAgo}
    </span>
  );
};

export default TimePost;
