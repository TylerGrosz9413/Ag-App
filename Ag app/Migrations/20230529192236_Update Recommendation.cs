using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ag_app.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRecommendation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recommendations_Requests_RequestId",
                table: "Recommendations");

            migrationBuilder.DropForeignKey(
                name: "FK_Recommendations_Retailers_RetailerId",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_RequestId",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_RetailerId",
                table: "Recommendations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_RequestId",
                table: "Recommendations",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_RetailerId",
                table: "Recommendations",
                column: "RetailerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recommendations_Requests_RequestId",
                table: "Recommendations",
                column: "RequestId",
                principalTable: "Requests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Recommendations_Retailers_RetailerId",
                table: "Recommendations",
                column: "RetailerId",
                principalTable: "Retailers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
