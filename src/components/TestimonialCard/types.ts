export type TestimonialItem = {
  id: number;
  name: string;
  summary: string;
  fullText: string;
};

export type TestimonialCardProps = {
  item: TestimonialItem;
};
