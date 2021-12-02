import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div className="mt-1 mx-1 text-center border border-danger text-danger">
      {error}
    </div>
  );
}
