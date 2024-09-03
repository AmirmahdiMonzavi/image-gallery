import type { ImagesResults } from "@/app/models/Images";
import { ImageSchemaWithPhotos } from "@/app/models/Images";
import env from "./env";

export const fetchImages = async (
  url: string
): Promise<ImagesResults | undefined> => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Fetch Images Error! ");
    }

    const ImagesResults: ImagesResults = await response.json();

    const parsedData = ImageSchemaWithPhotos.parse(ImagesResults);

    if (parsedData.total_results === 0) {
      return undefined;
    }

    return parsedData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }
  }
};
