import { MetaTags } from '@redwoodjs/web';

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800">
          Statistics About Us
        </h1>
      </div>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="row-gap-8 grid gap-24 lg:grid-cols-5">
          <div className="grid gap-8 lg:col-span-2">
            <div>
              <p className="mb-2 text-lg font-bold">Old man</p>
              <p className="text-gray-700">
                An old man lived in the village. He was one of the most
                unfortunate people in the world. The whole village was tired of
                him, he was always gloomy, he constantly complained.
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">The Wise Man</p>
              <p className="text-gray-700">
                People have been coming to the wise man, complaining about the
                same problems every time. One day he told them a joke and
                everyone roared in laughter.
              </p>
            </div>
          </div>

          <div className="grid divide-y rounded border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:col-span-3">
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Funds Raised
                </p>
                <p className="text-deep-purple-accent-400 text-2xl font-bold sm:text-xl">
                  $84 000 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Products
                </p>
                <p className="text-deep-purple-accent-400 text-2xl font-bold sm:text-xl">
                  52
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Downloads
                </p>
                <p className="text-deep-purple-accent-400 text-2xl font-bold sm:text-xl">
                  186M
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Users
                </p>
                <p className="text-deep-purple-accent-400 text-2xl font-bold sm:text-xl">
                  86K
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Installations
                </p>
                <p className="text-deep-purple-accent-400 text-2xl font-bold sm:text-xl">
                  917 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Subscribers
                </p>
                <p className="text-deep-purple-accent-400 text-2xl font-bold sm:text-xl">
                  213K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
