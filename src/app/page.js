import Image from "next/image";

import Header_bangla from "@/components/Header_bangla";
import Hero_bangla from "@/components/Hero_bangla";

export default async function Language({ params }) {

  return (
      <div>
          <Header_bangla></Header_bangla>
          <Hero_bangla></Hero_bangla>
      </div>   
  );
}


