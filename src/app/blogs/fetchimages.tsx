import axios from 'axios';

export type ImageData = {
  id: number;
  title: string;
  url: string;
};

export async function fetchImages(limit = 9): Promise<ImageData[]> {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
  return res.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    url: `https://picsum.photos/seed/${item.id}/300/200`,
  }));
}