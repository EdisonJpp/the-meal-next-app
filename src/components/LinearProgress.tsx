import { useNProgress } from '@tanem/react-nprogress';

import useLinearProgress from '@/lib/hooks/useLinearProgress';

const LinearProgress: React.FC = () => {
  const linearProgress = useLinearProgress();
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: linearProgress.isRouteChanging,
  });

  return (
    <>
      <style jsx>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointerevents: none;
          transition: opacity ${animationDuration}ms linear;
        }
        .bar {
          height: 3px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1031;
        }
        .spinner {
          box-shadow: 0 0 10px #fb923c, 0 0 5px #fb923c;
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0;
          transform: rotate(3deg) translate(0px, -4px);
          width: 100px;
        }
      `}</style>
      <div className='container'>
        <div className='bar bg-gradient-to-br from-orange-400 to-orange-500'>
          <div className='spinner ' />
        </div>
      </div>
    </>
  );
};

export default LinearProgress;
