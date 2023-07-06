interface props {
  label: string;
  type: string;
  ph: string;
}
function InputField({ label, type, ph }: props) {
  return (
    <div className="grid gap-3">
      <label className="text-left ">{label}</label>
      {type === "textarea" ? (
        <textarea
          placeholder="Saisir Votre Message"
          className="rounded-conv p-2 pt-4 px-6 border-2 border-dark-0 h-40 resize-none"
        />
      ) : (
        <input
          placeholder={ph}
          className="rounded-conv p-2 px-6 border-2 border-dark-0 "
        />
      )}
    </div>
  );
}

export default InputField;
