/*
  # Add Client Logo Table

  1. New Tables
    - `client_logo`
      - `id` (uuid, primary key)
      - `company_name` (text, company name)
      - `logo_url` (text, URL to company logo)
      - `display_order` (integer, for sorting logos)
      - `is_active` (boolean, to show/hide logos)
      - `created_at` (timestamptz, creation timestamp)

  2. Security
    - Enable RLS on `client_logo` table
    - Add policy for public read access (logos are public)
    - Add policy for authenticated admin insert/update/delete
*/

CREATE TABLE IF NOT EXISTS client_logo (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  logo_url text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE client_logo ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active client logos"
  ON client_logo
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert client logos"
  ON client_logo
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update client logos"
  ON client_logo
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete client logos"
  ON client_logo
  FOR DELETE
  TO authenticated
  USING (true);