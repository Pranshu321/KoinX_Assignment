import React from "react";
import Divider from "./Divider.jsx";
import Image from "next/image";
import Info1 from "../../public/info1.png";

function About() {
  return (
    <div className="bg-white mt-5 p-5 rounded-md">
      <div className="text-xl font-bold">About Bitcoin</div>
      <div className="font-bold text-lg pt-5">What is Bitcoin?</div>
      <div className="pt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
        eligendi non? Odit doloremque, corporis numquam beatae tenetur
        architecto sed dolore maxime minima nihil, distinctio similique sequi
        accusantium impedit dolorem voluptate nemo nobis necessitatibus fuga
        dicta. Ducimus ipsum fugiat eius dignissimos.
      </div>
      <Divider />
      <div className="font-bold text-lg">Lorem ipsum dolor sit amet.</div>
      <div className="pt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ullam
        odio deleniti vitae, voluptates, illum obcaecati iste quasi quisquam
        tempore excepturi reprehenderit cumque adipisci nihil sint placeat
        sapiente accusantium dolorum error. Assumenda nostrum aspernatur, unde
        enim ex sit voluptatem illum mollitia cum perferendis deserunt rerum et
        blanditiis quia ipsum laborum sequi omnis nemo dolore accusantium.
        Error, consequatur dolorum odit veniam est corporis molestias dolorem
        voluptatibus excepturi nemo repudiandae dignissimos, reiciendis
        architecto itaque laboriosam quod beatae! Hic tempore commodi similique
        culpa maiores voluptatum fugiat consectetur, illum modi veniam ipsum
        velit sapiente molestias, nulla praesentium aliquid, magni molestiae
        quas? Excepturi blanditiis eligendi officia modi explicabo repellendus
        autem veritatis dolorum incidunt debitis inventore delectus voluptates
        ipsum vel eveniet, nostrum doloribus reiciendis. Nobis, numquam?
      </div>
      <Divider />
      <div className="text-xl font-bold">Already Holding Bitcoin?</div>
      <div className="grid gap-5 md:grid-cols-2">
        <InfoCard
          image={Info1}
          title="Calculate Your Profits"
          ifOutside={false}
          color="from-green-400 to-blue-900"
        />
        <InfoCard
          image={
            "https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPVUHiBP1sj~Wqj-jX6JXhkY69WoofuEac3xLCr1EqW17s1ORlvyTaKXFhM8CY4BX8yTKWaFYSHXTJLoOTs9NNvpAQC5PCuRD-2MmQvQveuY3At4m7UG-9vt2MwzQdn-W0oYm3B~E5El1VPZebU-D9eXWZ6ekmEIan6L~Mmf8wR3hVKjqMqLVyTb2~P04q-16~IggO2xVsP7JgP9ewUFx1gU2EsrxDSKOgX-95csf6JMSKRWvUFWtzzej4xdZ8qIRY1I7YTqHSTyEuBYyb-ylUd3u6CcjTYUgK5M6JrhUFJ9gG2qdu4c02G-kAsF8Iiv1wE8wxwf8y-D2QONK8GnBg__"
          }
          title="Calculate Your Tax Liability"
          ifOutside={true}
          color="from-orange-500 to-red-600"
        />
      </div>
      <Divider />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla
        eveniet fuga in suscipit consequatur quas explicabo eaque dicta
        similique ad sint cumque iusto, recusandae officia ea quod dolore sit
        molestiae corrupti expedita? Repudiandae tempora adipisci maiores qui
        quidem enim quibusdam sit ab aliquid atque, cum molestiae labore saepe
        deleniti similique neque error. Pariatur, recusandae impedit.
        Accusantium delectus dolore accusamus veritatis pariatur, architecto
        debitis dolorem voluptatibus perferendis dolorum facilis voluptates
        itaque corporis, quae sequi aspernatur, a qui cumque odio vero
        distinctio! Quidem odit ad mollitia tenetur aliquam. Temporibus, placeat
        unde!
      </div>
    </div>
  );
}

function InfoCard({ image, title, color, ifOutside }) {
  return (
    <div
      className={`bg-gradient-to-br ${color} p-2 rounded-md flex items-center gap-5 h-auto md:h-52 w-full md:w-full mt-5`}
    >
      <div className="h-fit">
        {ifOutside ? (
          <img
            alt="L"
            src={image}
            width={100}
            height={100}
            className="md:h-fit md:w-48"
          />
        ) : (
          <Image
            alt="L"
            src={image}
            width={100}
            height={100}
            className="md:h-fit md:w-48"
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-3">
        <div className="text-base md:text-3xl font-bold text-white">
          {title}
        </div>
        <div className="rounded-md bg-white md:text-base text-xs w-fit font-bold text-center p-2 flex gap-2 justify-center items-center">
          <div>Check Now</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
