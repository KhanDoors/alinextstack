import Head from "next/head";
import { API, withSSRContext } from "aws-amplify";
import { listParks } from "../src/graphql/queries";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// export async function getStaticProps() {
//   const SSR = withSSRContext();
//   const { data } = await SSR.API.graphql({ query: listParks });
//   return {
//     props: {
//       parks: data.listParks.items,
//     },
//   };
// }

export default function Home() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async () => {
      const { data } = await API.graphql({ query: listParks });
      setParks(data.listParks.items);
    };
    fetchParks();
  }, []);

  return (
    <div>
      <Head>
        <title>National Parks!!!!!!</title>
      </Head>
      <div className="container">
        <h1>
          National Parks!!!!!!!!!!!!!!!! <Link href="/create">(+)</Link>
        </h1>
        <div className="img-grid">
          {parks.map((park) => {
            return (
              <div key={park.id} className="img-square">
                <h2>{park.name}</h2>
                {/* use the AmplifyS3Image component to render the park's image using its S3 key */}
                <AmplifyS3Image imgKey={park.image.key} height="200px" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
