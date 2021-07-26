const dataIter = async function* (...aIters) {
  for (const iter of aIters) {
    yield* iter;
  }
}

const dataLoader = async (dataMapper, ...fetches) => {
  for await (const data of dataIter(...fetches)) {
    return new dataMapper(data).map();
  }
};

export default dataLoader;
