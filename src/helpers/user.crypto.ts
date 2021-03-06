import * as bcrypt from 'bcrypt'

export class Encript {
    static async CriptoPass(pass: string): Promise<string> {
        const salt = await bcrypt.genSalt()
        return bcrypt.hash(pass, salt)
    }

    static async ComparePass(enterPass: string, userPass: string ): Promise<string> {
        return await bcrypt.compare(enterPass, userPass)
    }
}