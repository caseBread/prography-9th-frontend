import { useState, useEffect } from "react";

type UseInfiniteScrollProps = {
  initialLoad: number;
  step: number;
  totalItems: number;
};

export const useInfiniteScroll = ({
  initialLoad,
  step,
  totalItems,
}: UseInfiniteScrollProps) => {
  const [limit, setLimit] = useState(initialLoad);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        limit >= totalItems
      )
        return;
      setLimit((prevLimit) => {
        const newLimit = prevLimit + step;
        return newLimit > totalItems ? totalItems : newLimit;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [step, limit, totalItems]);

  return { limit };
};
