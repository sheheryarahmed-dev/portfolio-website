type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="max-w-2xl space-y-3">
      <p className="text-coral text-sm font-semibold tracking-wide">{label}</p>
      <h2 className="text-cream text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-cream-muted text-base leading-7">{description}</p>
      )}
    </header>
  );
}
