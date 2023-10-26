import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <div className="br-3 container rounded  bg-white p-3 text-left text-black">
        <p>
          I met a traveller from an antique land Who said: Two vast and
          trunkless legs of stone Stand in the desart. Near them, on the sand,
          Half sunk, a shattered visage lies, whose frown, And wrinkled lip, and
          sneer of cold command, Tell that its sculptor well those passions read
          Which yet survive, stamped on these lifeless things, The hand that
          mocked them and the heart that fed. And on the pedestal these words
          appear: &apos;My name is Ozymandias, king of kings; Look on my works,
          ye mighty, and despair!&apos; Nothing beside remains. Round the decay
          Of that colossal wreck, boundless and bare The lone and level sands
          stretch far away.
          <br />
          <br /> - Percy Shelley
        </p>
      </div>
    </>
  )
}

export default AboutPage
