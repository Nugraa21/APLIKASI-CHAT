import { memo, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <>
    <section className="min-h-screen text-orange-800 flex flex-col items-center justify-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-x-hidden relative" id="Home">
      Eror  404
    </section>
    </>
  );
};

export default memo(NotFound);
