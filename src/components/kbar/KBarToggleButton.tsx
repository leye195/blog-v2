import { useKBar } from 'kbar';
import Button from '@/components/common/Button';
import { Search } from '@/components/icon';

const KBarToggleButton = () => {
  const { query } = useKBar();

  return (
    <Button width="32px" height="32px" onClick={() => query.toggle()}>
      <Search />
    </Button>
  );
};

export default KBarToggleButton;
