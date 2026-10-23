/* Renders the copy doc's **bold** phrases as <strong>, so the wording can stay verbatim. */
export function Em({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
    </>
  );
}
