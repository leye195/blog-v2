import { useKBar } from 'kbar';
import Button from '@/components/common/Button';
import { Search } from '@/components/icon';

const KBarToggleButton = () => {
  const { query } = useKBar();

  return (
    <Button className="h-[32px] w-[32px]" onClick={() => query.toggle()}>
      <Search />
    </Button>
  );
};

export default KBarToggleButton;
