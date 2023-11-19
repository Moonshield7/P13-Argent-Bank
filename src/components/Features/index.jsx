import { featuresContent } from "../../assets/content/features";
import FeatureItem from "../FeatureItem";

function Features () {
  console.log(featuresContent)

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem content={featuresContent.chat} />
      <FeatureItem content={featuresContent.money} />
      <FeatureItem content={featuresContent.security} />
    </section>
  )
}

export default Features;