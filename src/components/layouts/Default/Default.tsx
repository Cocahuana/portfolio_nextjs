import Header from "@/components/modules/Header/Header";

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <div >
    <Header />
    <div>{children}</div>
  </div>
);

export default Default;