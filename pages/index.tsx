import { Virtuoso } from 'react-virtuoso'

const itemContent = (index: number) => <div style={{ height: index % 2 ? 30 : 20, background: 'white' }}>Item {index}</div>

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <Virtuoso totalCount={100} itemContent={itemContent} initialTopMostItemIndex={99} style={{ height: 300 }} atBottomStateChange={(atBottom) => console.log({atBottom})}
    startReached={() => console.log('start reached')}
  />

}
