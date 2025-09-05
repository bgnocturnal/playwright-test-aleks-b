import { test, expect } from '@playwright/test';

test.describe('Confirm visibility of all inteneded page elements', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qa-assessment.pages.dev/');
    });

    test('A text field for First Name exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'First Name (mandatory):'})).toBeVisible
    });
    
    test('A text field for Last Name exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'Last Name (mandatory):'})).toBeVisible
    });

    test('A text field for Email exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'Email (mandatory):'})).toBeVisible
    });

    test('A text field for Password exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'Password (mandatory):'})).toBeVisible
    });

    test('A text field for Confirm Password exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'Confirm Password (mandatory):'})).toBeVisible
    });

    test('A radio group for Gender exists on the page', async ({ page }) => {
        await expect(page.getByRole('radiogroup', { name: 'Gender (optional):'})).toBeVisible
    });

    test('A date field for Date of Birth exists on the page', async ({ page }) => {
        await expect(page.getByRole('time', { name: 'Date ofBirth (optional):'})).toBeVisible
    });

    test('A text field for Phone number exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'Phone Number (optional):'})).toBeVisible
    });
    
    test('A text field for Address exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'Address (optioal):'})).toBeVisible
    });

    test('A text field for LinkedIn URL exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'LinkedIn URL (optional):'})).toBeVisible
    });

    test('A text field for GitHub URL exists on the page', async ({ page }) => {
        await expect(page.getByRole('textbox', { name: 'GitHub URL (optional):'})).toBeVisible
    });

    test('A button for Submit exists on the page', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Submit'})).toBeVisible
    });
});