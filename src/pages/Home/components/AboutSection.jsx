import picture1 from "../../../assets/images/about-image-1.jpg";
import picture2 from "../../../assets/images/about-image-2.jpg";

function AboutSection() {
  return (
    <div className="relative">
      <div className="h-about w-100 px-36 mt-36">
        <h2 className="text-header">PHILOSOPHY OF EDUCATION</h2>
        <p className="w-1/2 py-6 text-2xl font-thin leading-10">
          Caritas Don Bosco School is a Christ-Centered Salesian Educational
          Community inspired by the Suore della carità di Gesù Charism anchored
          on Don Bosco’s Preventive System geared towards forming 21st-century
          servant-leaders contributing to societal transformation. 
        </p>
        <p className="w-1/2 py-6 text-2xl font-thin leading-10">
          <p>VISION</p>
          Caritas Don Bosco School is a leading Salesian educational institution
          continuously forming global life-giving servant-leaders.
        </p>
        <p className="w-1/2 py-6 text-2xl font-thin leading-10">
          <p>MISSION</p>
          We, the Educative Pastoral Community, commit to collaborate and
          animate the institutional core values for the holistic formation of
          learners in pursuing and fulfilling our God-given purpose in life
          evident in our service towards the environment, marginalized youth,
          indigenous people, and family ministry.
        </p>
      </div>

      <div className="absolute bg-black right-40 top-0">
        <img src={picture1} className="picture1" />
      </div>
      <div className="absolute second-picture-el">
        <img src={picture2} className="picture2" />
      </div>
    </div>
  );
}

export default AboutSection;
