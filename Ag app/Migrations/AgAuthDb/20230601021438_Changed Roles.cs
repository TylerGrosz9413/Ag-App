using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ag_app.Migrations.AgAuthDb
{
    /// <inheritdoc />
    public partial class ChangedRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d43cc4ca-3fa7-4bb7-92ff-4b27aeb1425b",
                columns: new[] { "Name", "NormalizedName" },
                values: new object[] { "Retailer", "RETAILER" });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e2c97106-2ace-4f41-80a8-5e3d13630e33",
                columns: new[] { "Name", "NormalizedName" },
                values: new object[] { "Customer", "CUSTOMER" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d43cc4ca-3fa7-4bb7-92ff-4b27aeb1425b",
                columns: new[] { "Name", "NormalizedName" },
                values: new object[] { "Writer", "WRITER" });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e2c97106-2ace-4f41-80a8-5e3d13630e33",
                columns: new[] { "Name", "NormalizedName" },
                values: new object[] { "Reader", "READER" });
        }
    }
}
