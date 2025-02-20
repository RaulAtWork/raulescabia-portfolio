import TimeLine, { TimeItem } from "../../components/TimeLine";

function Education_Certificates() {
  return (
    <section>
      <h1 className="text-center">EDUCATION & CERTIFICATES</h1>
      <TimeLine>
        <TimeItem  year="2023" title="CodeAcademy" subtitle="Full-Stack Course (150H+)" />
        <TimeItem  year="2020" title="Pega" subtitle="SSA & CSSA Certificates" />
        <TimeItem  year="2019" title="University Charles III of Madrid" subtitle="Degree in Computer Engineering" />
        <TimeItem  year="2019" title="University Charles III of Madrid" subtitle="Degree in Businesss Management" />
      </TimeLine>
    </section>
  );
}

export default Education_Certificates
