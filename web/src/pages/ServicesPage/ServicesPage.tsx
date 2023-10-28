import { MetaTags } from '@redwoodjs/web'

const ServicesPage = () => {
  return (
    <>
      <MetaTags title="Services" description="Services page" />

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-8 text-4xl font-semibold text-gray-800">
          Our Services
        </h1>
        <p className="text-xl text-gray-600">
          At Rabbit Fighter Studios, we offer a range of services designed to
          transform your digital presence and help your business thrive. Our
          core services include:
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
        <ServiceCard
          title="Web Development"
          description="Crafting user-centric and responsive websites tailored to your unique needs. Our expertise spans from front-end design to back-end development."
        />
        <ServiceCard
          title="Design & UX/UI"
          description="Creating visually captivating and user-friendly designs that engage your audience and leave a lasting impression."
        />
        <ServiceCard
          title="Digital Marketing"
          description="Driving brand awareness and engagement through data-driven digital marketing strategies, including SEO, SEM, and social media campaigns."
        />
        <ServiceCard
          title="Analytics"
          description="Transforming data into actionable insights, helping you make informed decisions to improve your online presence and strategy."
        />
        <ServiceCard
          title="Security"
          description="Ensuring the safety of your web assets with robust security measures, encryption, and regular audits."
        />
        <ServiceCard
          title="Integrations"
          description="Seamlessly connecting your web ecosystem with third-party services, APIs, and software for enhanced functionality."
        />
        <ServiceCard
          title="Automations"
          description="Streamlining processes with workflow automation, chatbots, and personalized user experiences to boost efficiency and productivity."
        />
      </div>
    </>
  )
}

const ServiceCard = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServicesPage
