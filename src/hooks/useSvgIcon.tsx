'use client';

import { ElementType, useEffect, useRef, useState } from 'react';

export const useSvgIcon = (name: string) => {
  const importedIconRef = useRef<ElementType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);

    const importSvgIcon = async (): Promise<void> => {
      try {
        const { ReactComponent } = (await import(
          `../../public/icons/${name}.svg`
        )) as {
          ReactComponent: ElementType;
        };

        importedIconRef.current = ReactComponent;
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    void importSvgIcon();
  }, [name]);

  return { error, loading, Icon: importedIconRef.current };
};
