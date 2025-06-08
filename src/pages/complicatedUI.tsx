import Step from '../components/Step';

export default function StepGuide() {

  const steps = [
    {
      stepNum : 1,
      title: "Input Your Claim",
      description: "Use voice, text, or upload supporting documents to submit your query."
    },
    {
      stepNum :2,
      title: "Choose Your AI Model",
      description: "Select from OpenAI, Grok, or Ollama — and let the best fit handle your analysis."
    },
    {
      stepNum : 3,
      title: "Get Actionable Results",
      description: "Receive outputs in structured text, easy-to-read charts, or visual summaries, ready to use."
    }
  ]
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-[12px]  sm:text-sm text-gray-500 uppercase tracking-wide">How It Works</p>
        <h2 className=" text-[20px] sm:text-3xl font-semibold">Getting Started Is Easier Than You Think</h2>
      </div>
      <div className="relative grid grid-cols-2 sm:grid-cols-4 grid-rows-3 g-0">
        {steps.map((e) => (
          <Step
            key={e.stepNum}
            step={e.stepNum}
            title={e.title}
            description={e.description}
          />
        ))}
      </div>
    </section>
  );
}