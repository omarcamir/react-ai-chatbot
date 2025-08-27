const AssistantSelect = ({ assistant, setAssistant }) => {
  const options = [
    { value: "gemini", label: "Gemini 2.5 Flash" },
    { value: "gpt", label: "GPT-4o-mini" },
  ];
  return (
    <select
      value={assistant}
      onChange={(e) => setAssistant(e.target.value)}
      className="rounded px-2 py-1 text-sm border"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default AssistantSelect;
