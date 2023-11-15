export default function TestimonialsGroup() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto py-12 grid gap-6 md:grid-cols-3">
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
            &ldquo;As an event planner, LuxFlo has given me peace of mind by
            ensuring my venue rentals go as planned.&ldquo;
          </blockquote>
          <div className="mt-4">
            <div className="font-semibold">Michael Davis</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              CMO, Planify
            </div>
          </div>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
            &ldquo;The product exceeded my expectations. I have recommended it
            to all my colleagues.&ldquo;
          </blockquote>
          <div className="mt-4">
            <div className="font-semibold">Mia Wallace</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              Director, Orion Pictures
            </div>
          </div>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white">
          <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
            &ldquo;The team was incredibly responsive and their guidance was
            invaluable in our decision-making process.&ldquo;
          </blockquote>
          <div className="mt-4">
            <div className="font-semibold">Vincent Vega</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              Manager, Marcellus Ltd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
