type SwitchComponentProps = {
  value: string;
  onChange: (switchName: string) => void;
};

export const SwitchesComponent = ({
  value,
  onChange,
}: SwitchComponentProps) => {
  return (
    <div className="w-full">
      <div>
        <label htmlFor="gateronRed">Gateron Red</label>
        <input
          type="radio"
          name="switchSound"
          id="gateronRed"
          value="gateronRed"
          checked={value === "gateronRed"}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gateronTeal">Gateron Teal</label>
        <input
          type="radio"
          name="switchSound"
          id="gateronTeal"
          value="gateronTeal"
          checked={value === "gateronTeal"}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
