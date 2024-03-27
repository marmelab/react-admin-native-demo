import fakeRestDataProvider from "ra-data-fakerest";
import generateData from "data-generator-retail";

export const dataProvider = fakeRestDataProvider(generateData(), true);
