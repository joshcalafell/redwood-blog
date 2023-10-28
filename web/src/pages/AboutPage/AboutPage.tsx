import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800">
          About Rabbit Fighter Studios
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to Rabbit Fighter Studios, where innovation meets excellence
          in web development. We are a dedicated team of tech enthusiasts,
          committed to crafting digital experiences that push boundaries and
          inspire growth. Our passion is to deliver web solutions that not only
          captivate your audience but also drive results for your business.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          At Rabbit Fighter Studios, we believe in five core pillars that define
          our approach to web development:
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
            <p className="mt-2 text-gray-600">
              Data is the compass of your online journey. Our team leverages
              cutting-edge analytics tools and techniques to provide you with
              deep insights into user behavior and website performance. We
              transform raw data into actionable intelligence, helping you make
              informed decisions that drive your business forward.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Engagement</h2>
            <p className="mt-2 text-gray-600">
              We understand the importance of creating websites that not only
              inform but also engage and inspire. Our designs are not just
              visually appealing but also strategically crafted to captivate
              your audience and keep them coming back for more.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Security</h2>
            <p className="mt-2 text-gray-600">
              In today&apos;s digital landscape, security is paramount. We take
              a proactive approach to safeguarding your web assets. From robust
              encryption to regular security audits, your website&apos;s safety
              is our top priority. Rest easy knowing your data and your users
              are protected.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Integrations
            </h2>
            <p className="mt-2 text-gray-600">
              We believe that your website should seamlessly integrate with your
              existing tools and platforms. Our team specializes in integrating
              third-party services, APIs, and software to ensure your web
              ecosystem functions harmoniously.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Automations</h2>
          <p className="mt-2 text-gray-600">
            Efficiency is key to success. We automate routine processes, freeing
            you to focus on what matters most. Whether it&apos;s workflow
            automation, chatbots, or personalized user experiences, we harness
            the power of automation to drive productivity and growth.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-3xl text-center">
        <p className="text-lg text-gray-600">
          We work collaboratively with our clients to understand their unique
          needs and goals. Our solutions are tailored to suit your business,
          ensuring that your website isn&apos;t just another online presence but
          a powerful asset that propels your brand forward.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Rabbit Fighter Studios is your partner in the ever-evolving digital
          world. We take pride in our ability to combine creativity, technical
          expertise, and a commitment to excellence to help you achieve your
          online ambitions.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Join us on this exciting journey of digital innovation, and let&apos;s
          build something remarkable together. Welcome to Rabbit Fighter
          Studios, where the future of the web begins.
        </p>
      </div>
    </>
  )
}

export default AboutPage
