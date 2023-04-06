import { test, expect } from '@playwright/experimental-ct-react17';
import React from 'react';
import { Button } from './Button';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<Button />);
  await expect(component).toContainText('Learn React');
});