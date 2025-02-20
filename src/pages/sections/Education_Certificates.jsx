import TimeLine, { TimeItem } from "../../components/TimeLine";

function Education_Certificates() {
  return (
    <section>
      <h1 className="text-center">EDUCATION & CERTIFICATES</h1>
      <TimeLine>
        <TimeItem  year="2023" subtitle="CodeAcademy" title="Full-Stack Course (150H+)" />
        <TimeItem  year="2020" subtitle="Pega" title="SSA & CSSA Certificates" />
        <TimeItem  year="2019" subtitle="University Charles III of Madrid" title="Degree in Computer Engineering" />
        <TimeItem  year="2019" subtitle="University Charles III of Madrid" title="Degree in Businesss Management" />
      </TimeLine>
    </section>
  );
}

export default Education_Certificates
