import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    // Create Pokemon table
    await db.schema
        .createTable('pokemon')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('name', 'varchar', (col) => col.unique().notNull())
        .addColumn('type', 'varchar')
        .addColumn('subtype', 'varchar')
        .addColumn('hp', 'integer')
        .addColumn('attack', 'integer')
        .addColumn('defense', 'integer')
        .addColumn('sp_attack', 'integer')
        .addColumn('sp_defense', 'integer')
        .addColumn('speed', 'integer')
        .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`NOW()`))
        .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`NOW()`))
        .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('pokemon').execute()
}