import useSWR from "swr";
import Filter from "../components/Filter";
import Table from "../components/Table";
import { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(`/api/unsupportedLinks`, fetcher);
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [type, setType] = useState("All");

  useEffect(() => {
    const tempLinks: any = [];

    if (data) {
      data.forEach((info: any) => {
        const link = info.linkId.S;
        const isFilled = info.attributes.L[0].M.url.S !== "";
        tempLinks.push({ link, isFilled });
      });

      setLinks(tempLinks);
      setFilteredLinks(tempLinks);
    }
  }, [data]);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div>
          <span className='text-2xl font-semibold leading-tight'>
            Unsupported Links
          </span>
        </div>
        <Filter
          data={links}
          setData={setFilteredLinks}
          setType={setType}
          filterType={type}
        />
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <span className='text-md mr-auto font-semibold leading-tight'>
            {filteredLinks.length} {type === "All" ? "links" : type + " links"}
          </span>
          <Table filteredData={filteredLinks} />
        </div>
      </div>
    </div>
  );
}
