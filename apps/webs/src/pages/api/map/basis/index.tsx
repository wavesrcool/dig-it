import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export type TypesWebsApiMapBasis = {
  country: [string, string];
  city: string;
  center: [number, number];
  tz: string;
};

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<TypesWebsApiMapBasis | undefined>
) => {
  try {
    const resp = await axios.get(`http://ip-api.com/json/`);

    const { data } = resp;

    if (data) {
      const {
        country: c0,
        countryCode: c1,
        city,
        lat,
        lon,
        timezone: tz,
      } = data;

      const result: TypesWebsApiMapBasis = {
        country: [c0, c1],
        city,
        center: [lat, lon],
        tz,
      };

      res.status(200).json(result);
    } else {
      res.status(200).json(undefined);
    }
  } catch (e) {
    res.status(400).json(undefined);
  }
};
