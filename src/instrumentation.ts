import { ZodIssue } from 'zod';
import { validateEnv } from '@/config/env';

const constructEnvErrorMessages = (errors: ZodIssue[]): string[] => {
    return errors.map((error, idx) => {
        return `${idx + 1}) ${error.path.join('.')} : ${error.message}`;
    });
};

export async function register() {
    try {
        const envValidationResult = validateEnv();

        if (envValidationResult.error) {
            const errorMessages = constructEnvErrorMessages(envValidationResult.error.errors);
            console.log('Error loading env: \n', errorMessages.join('\n'));
            process.exit();
        }

        console.info(' ✓ env loaded successfully');
    } catch (e: any) {
        throw new Error(`\n\n Error loading env:\n${e.message}\n`);
    }
}
