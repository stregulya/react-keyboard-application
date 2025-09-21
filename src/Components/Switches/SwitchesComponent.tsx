type SwitchesComponentProps = {
  value: string;
  onChange: (switchName: string) => void;
};

export const SwitchesComponent = ({
  value,
  onChange,
}: SwitchesComponentProps) => {
  return (
    <div className="w-full font-main flex flex-col items-center justify-between">
      <div>
        <label
          htmlFor="gateronRed"
          className={`border-2 rounded-2xl block box-border p-2 ${
            value === "gateronRed" ? " border-red-500" : "border-transparent"
          }`}
        >
          <h2 className="text-center">Gateron Red</h2>
          <img
            src="/Images/gateronRed.webp"
            alt="Gateron Red"
            width={150}
            height={150}
          />
        </label>
        <input
          type="radio"
          name="switchSound"
          id="gateronRed"
          value="gateronRed"
          checked={value === "gateronRed"}
          onChange={(e) => onChange(e.target.value)}
          className="hidden"
        />
      </div>
      <div>
        <label
          htmlFor="gateronTeal"
          className={`border-2 rounded-2xl block box-border p-2 ${
            value === "gateronTeal" ? " border-teal-500" : "border-transparent"
          }`}
        >
          <h2>Gateron Teal</h2>
          <img
            src="/Images/gateronTeal.webp"
            alt="Gateron Teal"
            width={150}
            height={150}
          />
        </label>
        <input
          type="radio"
          name="switchSound"
          id="gateronTeal"
          value="gateronTeal"
          checked={value === "gateronTeal"}
          onChange={(e) => onChange(e.target.value)}
          className="hidden"
        />
      </div>
    </div>
  );
};
