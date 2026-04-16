"use client";

export default function Form() {
  return (
    <div className="w-full min-h-[1000px] overflow-hidden">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScKBHJkLg0Y1SUPdmRuq5bCbiM-nyRr1zzA7l0k_QMvq3Tzyg/viewform?embedded=true"
        width="100%"
        height="100vh"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full h-full relative z-10"
      >
        Loading…
      </iframe>
    </div>
  );
}
