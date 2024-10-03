import AppButton from '../atomics/AppButton';

const AppCtaSection = () => (
  <section className="py-20 border-b border-light-gray">
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-black">
        GET IN TOUCH
      </h2>
      <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2">
      Feel free to reach out if you ever need assistance. My inbox and social media are always open, and I’ll do my best to help. Thank you for stopping by!
      </p>
      <AppButton title="Say Hi.." href="/contact" color="primary" />
    </div>
  </section>
);

export default AppCtaSection;
